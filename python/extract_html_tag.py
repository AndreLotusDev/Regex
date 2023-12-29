import requests
import re


url = 'https://www.google.com.br/?hl=pt-BR'  
response = requests.get(url)
html_content = response.text

tag_regex = r'<[^>]+>'

tags = re.findall(tag_regex, html_content)

for tag in tags:
    print(tag)
