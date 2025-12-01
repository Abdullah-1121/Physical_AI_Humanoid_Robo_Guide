import fetch from 'node-fetch';

describe('Docusaurus Development Server', () => {
  test('development server starts successfully and is accessible', async () => {
    // Assuming Docusaurus server runs on port 3000 by default
    const serverUrl = 'http://localhost:3000/';

    try {
      const response = await fetch(serverUrl);
      expect(response.ok).toBe(true); // Check if the response status is 2xx
      expect(response.status).toBe(200); // Expect a 200 OK status
    } catch (error) {
      fail(`Failed to connect to Docusaurus server: ${error.message}`);
    }
  }, 30000); // 30 seconds timeout for server to start and respond
});
