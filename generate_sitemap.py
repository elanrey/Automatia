import os
from datetime import datetime

def generate_sitemap():
    base_url = "https://automatia.cc"
    root_dir = os.path.dirname(os.path.abspath(__file__))
    sitemap_path = os.path.join(root_dir, "sitemap.xml")

    pages = []
    for dirpath, _, filenames in os.walk(root_dir):
        for filename in filenames:
            if filename.endswith(".html"):
                # Construct the full path to the file
                full_path = os.path.join(dirpath, filename)
                # Get the last modification time
                last_mod_time = os.path.getmtime(full_path)
                last_mod_date = datetime.fromtimestamp(last_mod_time).strftime("%Y-%m-%d")

                # Construct the URL
                relative_path = os.path.relpath(full_path, root_dir)
                url = f"{base_url}/{relative_path.replace(os.path.sep, '/')}"

                # Set priority based on file location and name
                priority = "1.00" if filename == "index.html" else "0.80"
                if "politica" in filename or "terminos" in filename or "mapa-sitio" in filename:
                    priority = "0.70"

                pages.append({
                    "loc": url,
                    "lastmod": last_mod_date,
                    "priority": priority
                })

    pages.sort(key=lambda page: (-float(page['priority']), page['loc']))

    with open(sitemap_path, "w", encoding="utf-8") as f:
        f.write('<?xml version="1.0" encoding="UTF-8"?>\n')
        f.write('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n')
        for page in pages:
            f.write("  <url>\n")
            f.write(f"    <loc>{page['loc']}</loc>\n")
            f.write(f"    <lastmod>{page['lastmod']}</lastmod>\n")
            f.write(f"    <priority>{page['priority']}</priority>\n")
            f.write("  </url>\n")
        f.write("</urlset>")

if __name__ == "__main__":
    generate_sitemap()
    print("Sitemap generated successfully!")
