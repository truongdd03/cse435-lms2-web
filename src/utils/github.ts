import { Octokit } from "@octokit/core";

const octokit = new Octokit({ auth: import.meta.env.VITE_GITHUB_TOKEN });

export const getCommitDates = async () => {
    const response = await octokit.request('GET /repos/truongdd03/cse435-lms2-web/commits', {
        owner: 'truongdd03',
        repo: 'cse435-lms2-web',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
    });

    const commitDates = response.data.map((commit: any) => commit['commit']['committer']['date']);
    return commitDates;
}