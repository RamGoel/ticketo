# CONTRIBUTION GUIDELINES

Thank you for considering contributing to ticketo! We appreciate your help and your contribution is valuable.

In this guide, we'll show you the ropes for contributing to our project without any jargon or confusion. We'll help you name your changes correctly, explain what our project is all about, and guide you on reporting issues. Plus, we've made it super easy with a step-by-step process, so you'll know exactly what to do.

So, if you're keen to make a difference and be a part of something awesome, keep reading! We're thrilled to have you on board. Let's get started! 🚀

## About our project

- Ticketo is an online platform crafted with NextJS 13, ExpressJS, and MongoDB, designed for ticket resharing. 
- Here, you can list event tickets you possess, making them available for others to buy.
- Likewise, you can explore tickets shared by fellow users and contact them to make purchases if something catches your interest.
- It's a hub where event tickets find new owners, connecting buyers and sellers effortlessly.
- To get a detailed overview of the project and code structure, go through the [README](./README.md).

## Writing your commits

Please follow these [guidelines](https://cbea.ms/git-commit/) when writing commits:

1. Use concise and descriptive commit messages.
2. Start the commit message with a verb in the present tense and the rest part in an imperative mood. (e.g., "Add," "Fix," "Update", "feat").
3. Limit the first line to 72 characters or less.
4. Reference the relevant issue or pull request number, if applicable.

## Writing your PR's

Please follow these [guidelines](https://www.pullrequest.com/blog/writing-a-great-pull-request-description/) when writing new pull requests:

1. Use a clear and descriptive title
2. Don't forget to mention the issue by linking the issue tag in your PR.
3. Provide a detailed description of your changes.
4. Describe the tests performed and mention any significant testcase if possible.
5. Including screenshots or screen recordings of the changes made is an added bonus.
6. You can add any relevant context if applicable or mention any related PRs or issue.
7. Mark off the completed tasks using checkbox and type of change you have made.

P.S. : Ensure that your changes adhere to the project's coding standards and maintain consistency with the existing codebase.

## How to report an issue

**Create a new issue** 

If you find a bug or have a suggestion for improvement, search for the existing issues before you create a new issue. Use a clear and descriptive title, and provide as much detail as possible in the issue description, including steps to reproduce the issue, if applicable.

**Solve an existing issue**

1. Go through the [existing issues](https://github.com/RamGoel/ticketo/issues) and find the one that interests you (add labels to filter the issues according to your choices).
2. Start a conversation to ask for the assigning you the issue.
3. Once the issue is assigned to you, you are good to go!!

## Step by Step Process of Contributing

1. Fork the repository:  Click on the "Fork" button on the top right corner of the repository page. This will create a copy of the repository in your GitHub account.

2. Clone this repository to your local machine using the clone command
```bash
git clone https://github.com/your-username/ticketo.git
```
3. Add the main repository as a remote upstream in your Git repository, follow these steps using the Git command line:
Navigate to the local repository
```bash
cd /path/to/your/repository
```
Use the following command
```bash
git remote add upstream https://github.com/RamGoel/ticketo.git
```
5. Create a New Branch: Create a new branch for your contribution using a descriptive name
```bash
git checkout -b feature-branch-name
```
6. Make the changes to the codebase
7. Once you are done with all the changes stage these changes using the git add command before you can commit them.
```bash
git add filename.txt
```
Or you can stage all changes using
```bash
git add .
```
8. Commit your changes with a descriptive commit message following the naming convention mentioned above:
```bash
git commit -m "your commit message"
```
9. Push your changes to your forked repository on GitHub to your branch
```bash
git push origin feature-branch-name
```
10. Go to your main repository and create a pull request. Keep in mind the PR guidelines above while opening a PR.
11. Maintainer will review your pull request to merge or may request additional changes before merging.

Thank you for your contribution!✨

