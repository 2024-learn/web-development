### git notes
- init: 
    - initializa a git repository
        `git init`
    - initialize a repo and name the default master branch to main at initialization:
        `git init -b main`
- merge:
    - merges your local changes and remote changes and that will create another commit history record
- rebase:
    - puts your changes above all new remote changes and rewrites the commit history so that your commit history will be cleaner
    - so instead of doing a git pull when your local code is behind by a commit or several, and creating an unnecessary commit,
    it is advisable to do a `git pull -r` or `git pull -rebase`
    - if you pull and there is a merge conflict, resolve the merge conflict in the code and then execute:
    `git add .`
    `git rebase --continue`
    `git push`

`git config --global --list`
`git config --global user.name "abc xyz"`
`git config --global user.email abc@xyz.com`

`git remote add <git repo url>`

- Delete a branch locally:
    `git branch -d <branch name>`
- delete a branch remotely:
    `git push origin --delete <remoteBranchName>`

- create a new branch:
    `git branch -m <new branch> or git checkout -b <branch name>` the latter will create and move to the new branch.

- rename local master branch to main:
    `git branch -m master main`

- to leave a branch without committing changes:
    `git stash`
- to resume:
    `git stash pop`

- to view commit history
    `git log`

### refs:
- https://www.sesync.org/resources/faqs/how-do-i-change-git-default-branch-name-new-repositories-master-main
- https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control
- https://www.freecodecamp.org/news/how-to-delete-a-git-branch-both-locally-and-remotely/





