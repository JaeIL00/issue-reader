export interface GithubResponseTypes {
    url: string;
    repository_url: string;
    labels_url: string;
    comments_url: string;
    events_url: string;
    html_url: string;
    id: number;
    node_id: string;
    number: number;
    title: string;
    user: {
        login: string;
        id: number;
        node_id: string;
        avatar_url: string;
        gravatar_id: string;
        url: string;
        html_url: string;
        followers_url: string;
        following_url: string;
        gists_url: string;
        starred_url: string;
        subscriptions_url: string;
        organizations_url: string;
        repos_url: string;
        events_url: string;
        received_events_url: string;
        type: string;
        site_admin: false;
    };
    labels: [
        {
            id: number;
            node_id: string;
            url: string;
            name: string;
            color: string;
            default: false;
            description: string | null;
        }
    ];
    state: string;
    locked: false;
    assignee: null;
    assignees: [];
    milestone: null;
    comments: number;
    created_at: string;
    updated_at: string;
    closed_at: null;
    author_association: string;
    active_lock_reason: null;
    draft: false;
    pull_request: {
        url: string;
        html_url: string;
        diff_url: string;
        patch_url: string;
        merged_at: null;
    };
    body: string;
    reactions: {
        url: string;
        total_count: number;
        "+1": number;
        "-1": number;
        laugh: number;
        hooray: number;
        confused: number;
        heart: number;
        rocket: number;
        eyes: number;
    };
    timeline_url: string;
    performed_via_github_app: null;
    state_reason: null;
}
