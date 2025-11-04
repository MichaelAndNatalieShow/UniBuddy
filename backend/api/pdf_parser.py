from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
import pymupdf 

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def upload_transcript(request):
    if 'file' not in request.FILES:
        return Response({"error": "No file uploaded"}, status=400)
    
    pdf_file = request.FILES['file']
    
    try:
        doc = pymupdf.open(stream=pdf_file.read(), filetype="pdf")
        text = ""
        for page in doc:
            text += page.get_text()
    except Exception as e:
        return Response({"error": str(e)}, status=500)

    user = request.user
    user.transcript_text = text
    user.save()

    return Response({"message": "Transcript processed", "text": text})
