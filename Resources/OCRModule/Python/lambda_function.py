import json
import base64
def lambda_handler(event,context):
    return context.client_context.custom
