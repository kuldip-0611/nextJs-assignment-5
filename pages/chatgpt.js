import React from 'react'


const Demo = () => {
    return (
        <>
            <nav class="navbar navbar-expand-md fixed-top">
                <div class="container">
                    <a href="#" class="navbar-brand">My Website</a>
                    <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <a href="#" class="nav-link">Home</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">About</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Services</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div class="container">
                <h1>Welcome to My Website</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel malesuada dolor. Vivamus sed sapien in arcu elementum commodo.</p>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="product-box">
                            <img src="https://via.placeholder.com/300x200" alt="Product Image" />
                            <h3>Product Title</h3>
                            <p className="price">$19.99</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel malesuada dolor. Vivamus sed sapien in arcu elementum commodo.</p>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="product-box">
                            <img src="https://via.placeholder.com/300x200" alt="Product Image" />
                            <h3>Product Title</h3>
                            <p className="price">$19.99</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel malesuada dolor. Vivamus sed sapien in arcu elementum commodo.</p>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="product-box">
                            <img src="https://via.placeholder.com/300x200" alt="Product Image" />
                            <h3>Product Title</h3>
                            <p className="price">$19.99</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel malesuada dolor. Vivamus sed sapien in arcu elementum commodo.</p>
                            <button>Add to Cart</button>
                        </div>
                    </div>

                </div>
            </div>
            <section class="testimonial-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h2>What Our Customers Are Saying</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="testimonial">
                                <div class="testimonial-text">
                                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et diam euismod, malesuada quam sed, aliquam velit. Vivamus euismod sapien ut libero sollicitudin, vel euismod orci hendrerit. Nulla facilisi. Nullam ut sapien vel quam rhoncus ultrices sed sit amet elit."</p>
                                </div>
                                <div class="testimonial-author">
                                    <img src="https://via.placeholder.com/100x100" alt="John Doe" />
                                    <p><strong>John Doe</strong><br />CEO, Company Name</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="testimonial">
                                <div class="testimonial-text">
                                    <p>"Sed non ipsum molestie, iaculis nisl vel, vehicula nibh. Donec eget erat vel velit venenatis egestas. Nullam ac ex et ante sagittis facilisis. Fusce sit amet ex eget turpis faucibus blandit. Donec placerat leo vel sem blandit consectetur."</p>
                                </div>
                                <div class="testimonial-author">
                                    <img src="https://via.placeholder.com/100x100" alt="Jane Smith" />
                                    <p><strong>Jane Smith</strong><br />Marketing Director, Company Name</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="testimonial">
                                <div class="testimonial-text">
                                    <p>"Cras at odio consectetur, varius turpis eu, pretium metus. Praesent vehicula malesuada risus, sed viverra quam tincidunt a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent pharetra sapien eu urna ullamcorper aliquam. "</p>
                                </div>
                                <div class="testimonial-author">
                                    <img src="https://via.placeholder.com/100x100" alt="Sarah Johnson" />
                                    <p><strong>Sarah Johnson</strong><br />Operations Manager, Company Name</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="featured-products">
                <div class="container">
                    <h2 class="text-center mb-5">Featured Products</h2>
                    <div class="row">
                        <div class="col-md-4 mb-4">
                            <div class="card">
                                <img src="https://picsum.photos/400/300" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Product Title</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ante in lorem cursus placerat.</p>
                                    <a href="#" class="btn btn-primary">Buy Now</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-4">
                            <div class="card">
                                <img src="https://picsum.photos/400/300" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Product Title</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ante in lorem cursus placerat.</p>
                                    <a href="#" class="btn btn-primary">Buy Now</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-4">
                            <div class="card">
                                <img src="https://picsum.photos/400/300" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Product Title</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ante in lorem cursus placerat.</p>
                                    <a href="#" class="btn btn-primary">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer class="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <h4>About Us</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel malesuada dolor. Vivamus
                                123 Main Street<br /> Anytown, USA 12345</p>
                            <ul>
                                <li><a href="#">Facebook</a></li>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">Instagram</a></li>
                                <li><a href="#">LinkedIn</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <h4>Subscribe</h4>
                            <div class="subscribe">
                                <form>
                                    <input type="email" placeholder="Enter your email address" />
                                    <button type="submit">Subscribe</button>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12 col-sm-12">
                            <h4>Credits</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel malesuada dolor. Vivamus eget convallis libero. Nulla facilisi. Quisque faucibus leo sit amet magna aliquam laoreet.</p>
                            <p class="credits">© 2023 Bootstrap Footer. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer >
        </>
    )
}

export default Demo
