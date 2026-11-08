#!/usr/bin/env python3
"""Собирает один самодостаточный файл (фото и музыка внутри), чтобы его можно было открыть с телефона без папки images."""
import base64, io, re
from pathlib import Path
from PIL import Image

root = Path(__file__).parent
src = (root / 'wedding_invitation_festive.html').read_text(encoding='utf-8')

def data_uri(path):
    im = Image.open(path).convert('RGB')
    im.thumbnail((1000, 1400))
    buf = io.BytesIO()
    im.save(buf, 'JPEG', quality=82, optimize=True)
    return 'data:image/jpeg;base64,' + base64.b64encode(buf.getvalue()).decode()

def repl(m):
    p = root / m.group(1)
    return data_uri(p) if p.exists() else m.group(0)

out = re.sub(r'"(images/[^"]+\.(?:jpg|jpeg|png))"', lambda m: '"' + repl(m) + '"', src)
# музыка тоже внутри файла, чтобы страница работала одним файлом
def audio_uri(m):
    p = root / m.group(1)
    return '"data:audio/mpeg;base64,' + base64.b64encode(p.read_bytes()).decode() + '"' if p.exists() else m.group(0)

out = re.sub(r'"(audio/[^"]+\.mp3)"', audio_uri, out)
(root / 'wedding_invitation_standalone.html').write_text(out, encoding='utf-8')
print('ok', len(out) // 1024, 'KB')
