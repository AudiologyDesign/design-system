## New System Development & Github Workflows

Github Repo: [https://github.com/AudiologyHoldings/ADThemes](https://github.com/AudiologyHoldings/ADThemes)

Terminal: iTerm2 [https://www.iterm2.com/](https://www.iterm2.com/)

Useful iTerm Setup: Create 3 different iTerm windows - 1 all git commands, 1 adwatch, 1 preview
![Screenshot](https://i.imgur.com/cOYXESi.png)

## Terminal Bash Profile
How to update bash_profile, in terminal type `nano ~/.bash_profile`
Then add these lines to this file.

``` code
alias adwatch="node ../AD/dev-tools/build-watch"
alias adsites="cd YOUR_PATH/ADThemes"
alias preview="./previewer -p"
alias previewq="./previewer -q"
alias previewd="./previewer -d"
PATH="$PATH:/Users/COMPUTERNAME/Sites/Work/GitHub/AD/dev-tools/git"
source ~YOUR_PATH/AD/dev-tools/git/.bash_completion
```

## Useful Git Commands Created

[https://github.com/AudiologyHoldings/AD/tree/master/dev-tools/git](https://github.com/AudiologyHoldings/AD/tree/master/dev-tools/git)

## Github Workflows

### Update personal branch from master

Terminal Commands:

``` code
status
branch name-dev
refresh
push
```

### Github Workflow: Make a commit to local and merge into master

Terminal Commands:

``` code
status
add . && commit && push
status
merge-into master && push && branch personal-brach
```

### Pushing development changes to live production

``` code
cd Sites/domain.com
sync-dev-to-prod
(it will ask yes or no to update dev dir into prod)
cd ../../ back to ADThemes
status 
merge-into master && push && branch your-branch
```

## Service Ticket Development Workflow

If a service ticket requires changes to either the Layout, Partials, or a Stylesheets you will need to follow these steps to complete the tasks.

- Locate project folder under $PATH/ADThemes/Sites/domain.com
- Open project in IDE
- Make edits
- [Commit Changes](#github-workflow-make-a-commit-to-local-and-merge-into-master)
- [Deploy changes](https://admin.audiologydesign.com/admin/util/deploy_adthemes)
