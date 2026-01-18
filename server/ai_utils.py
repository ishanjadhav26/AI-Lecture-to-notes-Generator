import os
from openai import OpenAI
from dotenv import load_dotenv
import json

load_dotenv()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

async def transcribe_audio(file_path: str):
    """Transcribe audio using OpenAI Whisper."""
    try:
        with open(file_path, "rb") as audio_file:
            transcript = client.audio.transcriptions.create(
                model="whisper-1", 
                file=audio_file,
                response_format="text"
            )
        return transcript
    except Exception as e:
        print(f"Transcription error: {e}")
        return "Manual transcription fallback: [Simulation of a lecture recording...]"

async def generate_study_materials(transcript: str):
    """Generate notes, summary, quizzes, and flashcards from transcript."""
    prompt = f"""
    Analyze the following lecture transcript and generate:
    1. A concise summary (max 300 words).
    2. Structured study notes with headers and bullet points.
    3. 5 multiple-choice questions (quizzes).
    4. 5 flashcards (front/back).

    Format the output as a valid JSON object with keys: 'summary', 'notes', 'quizzes', 'flashcards'.
    
    Transcript:
    {transcript}
    """
    
    try:
        response = client.chat.completions.create(
            model="gpt-4-turbo-preview",
            messages=[{"role": "system", "content": "You are a specialized academic AI assistant."},
                      {"role": "user", "content": prompt}],
            response_format={ "type": "json_object" }
        )
        return json.loads(response.choices[0].message.content)
    except Exception as e:
        print(f"Generation error: {e}")
        return {
            "summary": "AI processing error fallback summary.",
            "notes": "- Fallback point 1\n- Fallback point 2",
            "quizzes": [],
            "flashcards": []
        }

async def get_chat_response(lecture_id: str, transcript: str, user_query: str):
    """Retrieve context from transcript and generate AI response."""
    # Simplified RAG: Using the full transcript as context (if it fits) 
    # In production, this would use a vector search.
    prompt = f"""
    Context (Lecture Transcript):
    {transcript[:4000]} 

    User Question: {user_query}
    
    Answer the question based strictly on the lecture context. If the information isn't in the transcript, say so.
    """
    
    try:
        response = client.chat.completions.create(
            model="gpt-4-turbo-preview",
            messages=[{"role": "system", "content": "You are a helpful teaching assistant for this specific lecture."},
                      {"role": "user", "content": prompt}]
        )
        return response.choices[0].message.content
    except Exception as e:
        return "Sorry, I'm having trouble connecting to my AI core right now."
