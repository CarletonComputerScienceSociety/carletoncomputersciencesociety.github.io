# carletoncomputersciencesociety.github.io

## The Carleton Computer Science Society Website

### How to contribute
First, fork the repository. Before working on your own ideas, make sure to check out the issues tab. If you do not see your idea there, please add it so there can be a discussion about it. When you have implemented something that you want added to the site, make a pull request and detail the changes you made. Add some people as reviewers so that they are notified of your PR.

### How to get it running
#### Windows
1. Install ruby if you don't have it. You can download it from here https://rubyinstaller.org/downloads/
2. After the ruby installation is finished, allow the installer to get the rest of the dev items (when the terminal comes up, just hit enter)
3. Navigate to the parent directory of the repo in a command prompt window, and enter these commands
```
gem install bundler
bundle install
```
4. Run the server with this command
```
bundle exec jekyll serve
```
#### Ubuntu
1. Run this code in the parent directory of the repo to install all of the pre-reqs
```
sudo apt-get install ruby bundler -y
bundler install
```
2. Run the server with this command
```
bundle exec jekyll serve
```