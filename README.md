### Hungr

[Live Link](https://hung3r.herokuapp.com/#/)

Hungr is a food blogging site, inspired by Tumblr. Users can sign up, make different types of posts(text, image, media, etc), and have an index of all of their posts and of their followed users.
It was built using a Rails backend, and React / Redux frontend, PostgreSQL database, with AWS to host different types of media.

# Auth
Front end and back end auth is baked into the core of the app, preventing unauthorized access based on valid credentials. A switch is used to redirect the user from a splash page to either a login or signup page, rendered using React.

```js
      <ProtectedRoute path="/" component={NavContainer} />
      <Switch>
            <ProtectedRoute path="/dashboard" component={Dashboard} />
            <ProtectedRoute path="/profile" component={Profile} />
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute path="/" component={SplashContainer} />
      </Switch>
```
![splash_page](app/assets/images/splash_page.png)



## Features

#Dashboard
The user's dashboard has both posts that they made, as well as posts of the people they're following. It's populated by querying the database. They can choose to either edit or delete posts - but only their own.

![dashboard image](app/assets/images/dashboard.png)

#Dashboard Nav
Posts are created using different buttons, implementing React to edit the front end state to accomodate the brought up associated form. A preview is then generated.

![dashboard image](app/assets/images/dashboard_nav.png)

![image_form](app/assets/images/image_form.png)

![preview](app/assets/images/preview.png)

#Profile
The user's profile is rendered to show their personal posts, generated using a custom database query.

```js
 def user_posts
      @posts = Post.all.where(author_id: current_user.id)
   end 
```

