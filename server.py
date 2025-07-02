#!/usr/bin/env python3
"""
Simple HTTP server for serving the AutomatIA static website.
"""

import http.server
import socketserver
import os
import json
from urllib.parse import urlparse, parse_qs
import sys

PORT = 5000

class AutomatIAHandler(http.server.SimpleHTTPRequestHandler):
    """Custom handler for AutomatIA website with API endpoints."""
    
    def do_GET(self):
        """Handle GET requests."""
        if self.path == '/':
            self.path = '/index.html'
        return super().do_GET()
    
    def do_POST(self):
        """Handle POST requests for contact form."""
        parsed_path = urlparse(self.path)
        
        if parsed_path.path == '/api/contact':
            self.handle_contact_form()
        else:
            self.send_error(404, "Endpoint not found")
    
    def handle_contact_form(self):
        """Handle contact form submissions."""
        try:
            # Get the content length
            content_length = int(self.headers['Content-Length'])
            
            # Read the POST data
            post_data = self.rfile.read(content_length)
            data = json.loads(post_data.decode('utf-8'))
            
            # Log the contact submission (in a real app, save to database)
            print(f"📧 New contact submission:")
            print(f"   Name: {data.get('name', 'N/A')}")
            print(f"   Email: {data.get('email', 'N/A')}")
            print(f"   Subject: {data.get('subject', 'N/A')}")
            print(f"   Message: {data.get('message', 'N/A')}")
            print("-" * 50)
            
            # Send success response
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
            self.send_header('Access-Control-Allow-Headers', 'Content-Type')
            self.end_headers()
            
            response = {
                'success': True,
                'message': 'Contact form submitted successfully'
            }
            
            self.wfile.write(json.dumps(response).encode('utf-8'))
            
        except Exception as e:
            print(f"❌ Error handling contact form: {e}")
            self.send_error(500, f"Server error: {str(e)}")
    
    def do_OPTIONS(self):
        """Handle OPTIONS requests for CORS."""
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()
    
    def end_headers(self):
        """Add CORS headers to all responses."""
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

def main():
    """Start the server."""
    # Change to the directory containing the script
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    # Create the server
    with socketserver.TCPServer(("0.0.0.0", PORT), AutomatIAHandler) as httpd:
        print(f"🚀 AutomatIA server starting on port {PORT}")
        print(f"🌐 Visit: http://localhost:{PORT}")
        print(f"📧 Contact form submissions will be logged here")
        print("-" * 50)
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n👋 Server stopping...")
            httpd.shutdown()

if __name__ == "__main__":
    main()