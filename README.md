### Hungr

[Live Link](https://hung3r.herokuapp.com/#/)

Hungr is a food blogging site, inspired by Tumblr. Users can sign up, make different types of posts(text, image, media, etc), and have an index of all of their posts and of their followed users.
It was built using a Rails backend, and React / Redux frontend, PostgreSQL database, with AWS to host different types of media.

# Auth
Front end and back end auth is baked into the core of the app, preventing unauthorized 
![splash_page](app/assets/images/splash_page.png)

```
      <ProtectedRoute path="/" component={NavContainer} />
      <Switch>
            <ProtectedRoute path="/dashboard" component={Dashboard} />
            <ProtectedRoute path="/profile" component={Profile} />
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute path="/" component={SplashContainer} />
      </Switch>

```







## Features

#Dashboard
The user's dashboard has both posts that they made, as well as posts of the people they're following. It's populated by querying the database 

![dashboard image](app/assets/images/dashboard.png)

#Dashboard Nav
Posts are created using different buttons, implementing React to edit the front end state to accomodate the brought up associated form. A preview is then generated.

![dashboard image](app/assets/images/dashboard_nav.png)

![image_form](app/assets/images/image_form.png)

![preview](app/assets/images/preview.png)



