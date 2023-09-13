import json
import base64
def lambda_handler(event,context):
    decoded_bytes = base64.b64decode(event["Client context"])
    decoded_string = decoded_bytes.decode()
    decoded_data = json.loads(decoded_string)
    # message = 'Hello {}!'.format(event['first_name'])
    # data = {'message': message}
    return decoded_data
