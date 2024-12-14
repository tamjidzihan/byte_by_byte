"""
This script processes Markdown files by replacing image links with Markdown-compatible ones and copying images to a designated folder. 
It also adds custom IDs to headings and saves the updated content to a new directory for Next.js. 
Finally, it outputs a success message once the files are processed.

"""

import os
import re
import shutil
from dotenv import load_dotenv

# Load environment variables from the .env file
load_dotenv() 

# Get paths from the .env file
posts_dir = os.getenv("POST_DIR")
attachments_dir =  os.getenv("ATTACHMENT_DIR")
static_images_dir= os.getenv("STATIC_IMAGE_DIR")
destination_dir= os.getenv("DESTINATION_DIR")

# Step 1: Process each markdown file in the posts directory
for filename in os.listdir(posts_dir):
    if filename.endswith(".md"):
        filepath = os.path.join(posts_dir, filename)

        with open(filepath, "r", encoding="utf-8") as file:
            content = file.read()

        # Step 2: Create a separate folder for the post in the static_images_dir
        post_name = os.path.splitext(filename)[0]
        post_image_dir = os.path.join(static_images_dir, post_name)
        os.makedirs(post_image_dir, exist_ok=True)

        # Step 3: Find all image links in the format [[image.png]]
        images = re.findall(r"\[\[([^]]*\.png)\]\]", content)

        # Step 4: Replace image links and ensure URLs are correctly formatted
        for image in images:
            # Prepare the Markdown-compatible link with %20 replacing spaces
            new_image_path = f"/{post_name}/{image.replace(' ', '%20')}"
            markdown_image = f"[Image Description]({new_image_path})"
            content = content.replace(f"[[{image}]]", markdown_image)

            # Copy the image to the post's image folder if it exists
            image_source = os.path.join(attachments_dir, image)
            if os.path.exists(image_source):
                shutil.copy(image_source, post_image_dir)

        # Step 5: Add {#text} to headings
        def add_heading_ids(match):
            heading_text = match.group(2)
            # Remove unwanted characters from the heading ID
            heading_id = (
                re.sub(r'[:;!.,?/*&^%$""\'\'\_\+\-]', "", heading_text)
                .replace(" ", "-")
                .replace("#", "")
                .strip()
            )
            return f"{match.group(1)} {heading_text} {{#{heading_id}}}"

        content = re.sub(
            r"^(##+)\s+(.*)", lambda m: add_heading_ids(m), content, flags=re.MULTILINE
        )

        # Step 6: Write the updated content to the Nextjs content dir
        destination_filepath = os.path.join(destination_dir, filename)
        with open(destination_filepath, "w", encoding="utf-8") as file:
            file.write(content)

print(
    "Markdown files processed(link id reated), images copied to respective folders, and links updated successfully."
)
