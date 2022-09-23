# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# The BlogPostController is inheriting from ApplicationController, so it will access to the data in it. Also have an index method.
class BlogPostsController < ApplicationController
  def index
    # ---2)
    # The index method is being used to show items. We have an instance variable named posts that will show all of data in BlogPost.
    @posts = BlogPost.all
  end

  

  # ---3)
  # Show method is being used to show a specific item. Instance variable post is going to find a single post after being given an id.
  def show
    @post = BlogPost.find(params[:id])
  end
  
  # ---4)
   # New method is how a new post will be created . An html form will be shown in the application.
  def new
    @post = BlogPost.new
  end


  def create
    # ---5)
    # Create method is being used in order to create a new post.This will actually add the new post that was created to the database. It will direct to the post if it is valid. Otherwise will show the same html form
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

 
  def edit
    # ---6)
    # Edit method is use to edit a post. An id must be given to it.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # Update method is used to add the edit changes to the post. Will also redirect to the post if valid, otherwise back to the edit method.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
    # Destroy method being used to delete a post. The second redirect will take you back to the same post.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
  # Private method is being used to add security.This is how the database is protected from outside access.
  private
  def blog_post_params
    # ---10)
    #  A post must have a title and content in order for to be allowed into the database.
    params.require(:blog_post).permit(:title, :content)
  end
end
