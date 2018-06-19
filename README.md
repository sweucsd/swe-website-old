# Society of Women Engineers at UCSD Website
This is the repo for the [SWE UCSD](http://swe.ucsd.edu/) website, with instructions for set-up and updating for use by board members with appropriate login credentials.

## Set-up
1. [Install Jekyll](https://jekyllrb.com/docs/installation/)
2. Download the code in this repo 
<br>`git clone https://github.com/sweucsd/swe-website.git`
3. Navigate to the folder with the website code 
<br>`cd swe-website`
5. Do some set-up 
<br>`bundle install`
6. Generate the website files from the code 
<br>`bundle exec jekyll build`

## Preview website changes
1. `bundle exec jekyll serve`
2. Go to `localhost:4000` on a web browser
3. Do `control + c` in the terminal when you're done

## Updating the website
1. Log in to Siteleaf and make your content changes to the swe-website website. Make sure to save your changes.
If you want to upload pictures and there isn’t enough Siteleaf storage, upload your pictures to the assets/img folder.
When putting in image URLs on pages, the URL will be something like /assets/img/your_image..jpg
If you want to preview your changes through Siteleaf, you can publish your changes to see them on swe-website.siteleaf.net
2. Navigate to the folder where you put the website code, likely you need to do `cd swe-website`
3. Get the updated files 
<br>`git pull origin master`
4. Generate the new site with Jekyll 
<br>`bundle exec jekyll build`
5. Copy the website files to the website server 
<br>`rsync -av ./public_html/* swe@swe.ucsd.edu:~/public_html` 

<br>
Made from a slightly opinionated, personal boilerplate for small to medium sized web projects. Based on Jekyll and Grunt.
