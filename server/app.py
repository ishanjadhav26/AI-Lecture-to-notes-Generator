import streamlit as st

st.set_page_config(page_title="AI Lecture to Notes Generator", layout="centered")

st.title("📚 AI Lecture to Notes Generator")
st.write("Upload your lecture audio/video and get AI-generated notes.")

uploaded_file = st.file_uploader("Upload Lecture File", type=["mp3", "wav", "mp4"])

if uploaded_file:
    st.success("File uploaded successfully!")
    st.write("File name:", uploaded_file.name)
    st.write("AI processing will be connected here.")
