# Scaling TypeScript for Enterprise Developers
This is the repository for the LinkedIn Learning course Scaling TypeScript for Enterprise Developers. The full course is available from [LinkedIn Learning][lil-course-url].

![lil-thumbnail-url]

Looking to elevate your coding skills from simple type annotations to sophisticated data modeling and API integration? Join instructor Eve Porcello to boost your understanding of TypeScript's core principles, such as classes and interfaces as well as complex concepts like generics and utility types. Learn to construct robust and type-safe applications by managing code structure through namespaces, modules, and data models. Gain practical experience with hands-on coding capstone projects that simulate real-world programming challenges. Learn how to write cleaner, more efficient code as well as how to debug, test, and automate projects using tools like Vitest and VS Code. Whether you're a developer looking to transition to TypeScript, enhance your existing skills, or a student eager to explore typed JavaScript, this course offers valuable insights and skills that can help you become a proficient TypeScript developer.

_See the readme file in the main branch for updated instructions and information._
## Instructions
This repository has branches for each of the videos in the course. You can use the branch pop up menu in github to switch to a specific branch and take a look at the course at that stage, or you can add `/tree/BRANCH_NAME` to the URL to go to the branch you want to access.

## Branches
The branches are structured to correspond to the videos in the course. The naming convention is `CHAPTER#_MOVIE#`. As an example, the branch named `02_03` corresponds to the second chapter and the third video in that chapter. 
Some branches will have a beginning and an end state. These are marked with the letters `b` for "beginning" and `e` for "end". The `b` branch contains the code as it is at the beginning of the movie. The `e` branch contains the code as it is at the end of the movie. The `main` branch holds the final state of the code when in the course.

When switching from one exercise files branch to the next after making changes to the files, you may get a message like this:

    error: Your local changes to the following files would be overwritten by checkout:        [files]
    Please commit your changes or stash them before you switch branches.
    Aborting

To resolve this issue:
	
    Add changes to git using this command: git add .
	Commit changes using this command: git commit -m "some message"

## Installing

1. To use these exercise files, you must have the following installed:
   - Node.js 18+
2. Clone this repository into your local machine using the terminal (Mac), CMD (Windows), or a GUI tool like SourceTree.

[0]: # "Replace these placeholder URLs with actual course URLs"
[lil-course-url]: https://www.linkedin.com/learning/
[lil-thumbnail-url]: http://


## github_mcp server
            To install and run the github_mcp server tools with your provided ~/.gemini/settings.json configuration, you need to ensure that the referenced server package (@modelcontextprotocol/server-github) is available to be run via npx and that your environment has a valid GITHUB_TOKEN set.

            Your config:

            ```json```
            {
                "theme": "GitHub",
                "selectedAuthType": "gemini-api-key",
                "mcpServers": {
                    "github_mcp": {
                    "command": "npx",
                    "args": ["-y", "@modelcontextprotocol/server-github"],
                    "env": {
                        "GITHUB_TOKEN": "${GITHUB_TOKEN}"
                    },
                    "timeout": 30000,
                    "trust": true
                    }
                }
            }

            o What this configuration does?
            When Gemini (or another MCP client) starts the github_mcp server:

            It runs:

            ```bash```
            npx -y @modelcontextprotocol/server-github
            It sets the environment variable GITHUB_TOKEN to your ${GITHUB_TOKEN} value.

            This launches the GitHub MCP server, which will use your token to authenticate GitHub API requests.

            o Prerequisites
            Node.js (ver GT 20.xx) and npx must be installed and available in your PATH.

            A valid GitHub Personal Access Token with appropriate scopes (typically repo and read:packages) must be set in your environment as GITHUB_TOKEN.

            The package @modelcontextprotocol/server-github must exist on npm. (If it does not, you'll get an error from npx.)

            o Steps to Install and Run
            Set your GitHub token in your environment:

            ```bash```
            export GITHUB_TOKEN=your_personal_access_token
            Test running the server manually:

            ```bash```
            npx -y @modelcontextprotocol/server-github
            If this runs successfully and prints server output, your setup is correct.

            Start Gemini (or your MCP client) as usual.
            It will read your settings.json and launch the server as configured.

            o Troubleshooting
            If you see errors like "command not found" or "package not found," check that:

            Node.js and npx are installed.

            The npm package @modelcontextprotocol/server-github is published and available.

            Your GITHUB_TOKEN is valid and exported in your shell environment or stored in .env file.

            o Alternative: Official GitHub MCP Server
            If @modelcontextprotocol/server-github is not available, you can use the official GitHub MCP server from GitHub, which is typically run with Docker:

            ```json```
            "mcpServers": {
                "github": {
                    "command": "docker",
                    "args": [
                    "run",
                    "-i",
                    "--rm",
                    "-e",
                    "GITHUB_PERSONAL_ACCESS_TOKEN",
                    "ghcr.io/github/github-mcp-server"
                    ],
                    "env": {
                    "GITHUB_PERSONAL_ACCESS_TOKEN": "${GITHUB_TOKEN}"
                    }
                }
            }
            But your current setup is designed for an npm-based server.

            o Summary:
            Your configuration will work if you have Node.js, npx, and the @modelcontextprotocol/server-github package(s) available, and your GITHUB_TOKEN is set in your environment. If you encounter issues, verify these prerequisites and consider using the official Docker-based GitHub MCP server as an alternative

### Gemini CLI: Convesational AI Powered Space via CLI 

##  Using the Gemini CLI for AI Agent-automated development and testing

            o http://bit.ly/4etOiIZ
            o https://www.linkedin.com/posts/software-development-engineer-engineer-61a095297_conversational-ai-powered-space-via-cli-activity-7346164514721013761-tZ3E