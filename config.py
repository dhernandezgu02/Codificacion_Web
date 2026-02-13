import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Get API key from environment
openai_api_key_Codifiacion = os.getenv('OPENAI_API_KEY')
gemini_api_key = os.getenv('GEMINI_API_KEY')
