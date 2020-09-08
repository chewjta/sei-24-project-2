var React = require("react");

export default class Home extends React.Component {
  render() {

    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        </head>
        <body>


        <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 class="my-0 mr-md-auto font-weight-normal">Console.Log</h5>
      <nav class="my-2 my-md-0 mr-md-3">
        <a class="p-2 text-dark" href="#">Features</a>
        <a class="p-2 text-dark" href="#">Support</a>
      </nav>
           <form id='login' method='GET' action='/accounts/login'>
            <input type='submit' value='Log In' class="btn btn-success"/>
          </form>
    </div>

<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100 h-100" src="/dashboard.png" alt="First slide" style={{opacity:'0.5'}}/>
      <div class="carousel-caption d-none d-md-block text-dark text-left">
    <h3 class="font-weight-bold font-italic">Customized Dashboard</h3>
    <h4 class="font-weight-lighter">Visualise your profile at a glance</h4>
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 h-100" src="/questions.png" alt="Second slide"style={{opacity:'0.5'}} />
      <div class="carousel-caption d-none d-md-block text-dark text-left">
    <h3 class="font-weight-bold font-italic">Question Bank</h3>
    <h4 class="font-weight-lighter">Get access to all questions</h4>
  </div>
    </div>

    <div class="carousel-item">
      <img class="d-block w-100 h-100" src="/qn.png" alt="Third slide" style={{opacity:'0.5'}} />
      <div class="carousel-caption d-none d-md-block text-dark text-left">
    <h3 class="font-weight-bold font-italic">Forum</h3>
    <h4 class="font-weight-lighter">Join in a discussion!</h4>
  </div>
    </div>

    <div class="carousel-item">
      <img class="d-block w-100 h-100" src="/markdown.png" alt="Second slide"style={{opacity:'0.5'}} />
      <div class="carousel-caption d-none d-md-block text-dark text-left">
    <h3 class="font-weight-bold font-italic">Upload</h3>
    <h4 class="font-weight-lighter">Lazy to type? Just upload an image!</h4>
  </div>
    </div>

  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>


    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 class="display-4">Bring your classroom home</h1>
      <p class="lead">The world is moving towards digitalization and the classroom is of no exception. Get started now with the world first personalized student-teacher forum. </p>
    </div>
    <div class="container">
      <div class="card-deck mb-3 text-center">
        <div class="card mb-4 box-shadow">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">Student</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$3.99 <small class="text-muted">/ mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>Markdown mode included</li>
              <li>30 questions per month</li>
              <li>Customised dashboard mode</li>
              <li>Help center access</li>
            </ul>
        <form id='register' method='GET' action='/accounts/register' >
            <input type='submit' value='Sign up now' class="btn btn-primary"/>
          </form>
          </div>
        </div>
        <div class="card mb-4 box-shadow">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">Teacher</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$9.99 <small class="text-muted">/ mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>Verify mode</li>
              <li>Customised dashboard mode</li>
              <li>Priority email support</li>
              <li>Help center access</li>
            </ul>
                      <form id='register' method='GET' action='/accounts/register' >
            <input type='submit' value='Sign up now' class="btn btn-primary"/>
          </form>
          </div>
        </div>

      </div>

      <footer class="pt-4 my-md-5 pt-md-5 border-top">
        <div class="row">
          <div class="col-12 col-md">
            <img class="mb-2" src="https://miro.medium.com/max/448/1*sDdFoK-pWpX4YjoLPxq1pA.png" alt="" width="24" height="24" />
            <small class="d-block mb-3 text-muted">© 2020</small>
          </div>
          <div class="col-6 col-md">
            <h5>Features</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#">Cool stuff</a></li>
              <li><a class="text-muted" href="#">Random feature</a></li>
              <li><a class="text-muted" href="#">Team feature</a></li>
              <li><a class="text-muted" href="#">Stuff for developers</a></li>
              <li><a class="text-muted" href="#">Another one</a></li>
              <li><a class="text-muted" href="#">Last time</a></li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>Resources</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#">Resource</a></li>
              <li><a class="text-muted" href="#">Resource name</a></li>
              <li><a class="text-muted" href="#">Another resource</a></li>
              <li><a class="text-muted" href="#">Final resource</a></li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>About</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#">Team</a></li>
              <li><a class="text-muted" href="#">Locations</a></li>
              <li><a class="text-muted" href="#">Privacy</a></li>
              <li><a class="text-muted" href="#">Terms</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>



        </body>
      </html>
      );
  }
}
