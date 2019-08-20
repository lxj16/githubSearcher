class Github {
  constructor() {
    this.client_id = "3034680e1acc2bf2d0f5";
    this.client_secret = "0b1d8ec8d3a6e53551898a6d35bd89a5da62f3f7";
    this.repo_count = 6;
    this.repo_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${
        this.repo_count
      }&sort=${this.repo_sort}&client_id=${this.client_id}&client_secret=${
        this.client_secret
      }`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    };
  }
}
