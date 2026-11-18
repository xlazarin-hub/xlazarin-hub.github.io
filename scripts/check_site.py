from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urljoin, urlsplit

root = Path("dist")
pages = list(root.rglob("index.html"))
assert len(pages) == 5, f"Expected five portfolio pages, found {len(pages)}"


class References(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []
        self.ids = set()

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if "id" in attrs:
            self.ids.add(attrs["id"])
        for attribute in ("href", "src"):
            if attribute in attrs:
                self.links.append(attrs[attribute])


parsed = {}
for page in pages:
    parser = References()
    parser.feed(page.read_text(encoding="utf-8"))
    parsed[page] = parser

for page, parser in parsed.items():
    for ref in parser.links:
        url = urlsplit(urljoin("/" + page.relative_to(root).as_posix(), ref))
        if url.scheme or url.netloc:
            continue
        target = root / url.path.lstrip("/")
        if target.is_dir():
            target /= "index.html"
        assert target.is_file(), f"{page}: missing {ref}"
        if url.fragment:
            assert url.fragment in parsed[target].ids, f"{page}: missing {ref}"
print(f"Checked {len(pages)} pages and their internal links.")
