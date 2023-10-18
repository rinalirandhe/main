import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'font-awesome/css/font-awesome.min.css';
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>

export default function Dashboard() {
  return (
    <div>
      <div className="d-flex flex-row">
        <div className="col-md-2 col-lg-2 col-sm-2">
          <div className="card1 p-3">
            <div className="image d-flex flex-row align-items-center">
              <img src="https://i.imgur.com/R4afbIg.png" alt='Dashboard' height="50" width="50" />
              <span style={{ color: '#fff', fontWeight: 'bold', }}>Dashboard</span>
            </div>
            <hr className="hline mt-4"></hr>
            <div className="d-flex flex-column justify-content-start align-item-center">
              <button className="btnStyle mt-3" style={{ backgroundColor: '#224572' }}><i className="bi bi-speedometer2"></i><span>Dashboard</span><i className="bi bi-chevron-right"></i></button>
              <button className="btnStyle mt-3"><i className="fa fa-dashboard"></i><span>Product</span><i className="bi bi-chevron-right"></i></button>
              <button className="btnStyle mt-3"><i className="bi bi-person-square"></i><span>Customer</span><i className="bi bi-chevron-right"></i></button>
              <button className="btnStyle mt-3"><i className="fa fa-inbox"></i><span>Income</span><i className="bi bi-chevron-right"></i></button>
              <button className="btnStyle mt-3"><i className="bi bi-x-octagon"></i><span>Promote</span><i className="bi bi-chevron-right"></i></button>
              <button className="btnStyle mt-3"><i className="bi bi-question-octagon"></i><span>Help</span><i className="bi bi-chevron-right"></i></button>
            </div>
          </div>
        </div>
        <div className="col-md-10 col-lg-10 col-sm-10">
          <div className="card2 p-3">
            <div className="hello d-flex flex-wrap justify-content-between align-items-center p-3">
              <div className='md-6 sm-12'><span>Hello Shahrukh</span><img src='https://w7.pngwing.com/pngs/806/254/png-transparent-hand-waving-wave-emoji-wave-hand-arm-sign-thumbnail.png' alt='hello' height={30} width={30} style={{ marginLeft: '5px' }} /><span>,</span> </div>
              <div className="md-6 sm-12-mt-3 search-container">
                <input type="text" placeholder="search" color='#d3d3d3' className='input-search' />
                <div className="search-icon">
                  <i className="bi bi-search"></i>
                </div>
              </div>
            </div>
            <div className='row p-3 md-12 lg-12 sm-12'>
              <div className='col-md-3 col-lg-3 col-sm-3'>
                <div className="card cardchild mt-3 p-2" style={{ border: '0px' }}>
                  <div className="d-flex p-2 mt-2 justify-content-start rounded">
                    <div className="cardIcon">
                      <i className="bi bi-currency-dollar" style={{ color: 'darkgreen' }}></i>
                    </div>
                    <div className="cardIconText d-flex flex-column p-2">
                      <span style={{ color: '#797A79' }}>Earning</span>
                      <p style={{ color: '#000', fontSize: '20px', fontWeight: 'bold', margin: '0px' }}><b>$198K</b></p>
                      <p style={{ color: 'darkgreen', margin: '0px', fontSize: '14px', alignItems: 'center' }}><b><span style={{ fontSize: '16px', fontWeight: 'bolder', }}>🠕</span>37.8%</b>this month</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-lg-3 col-sm-3'>
                <div className="card cardchild mt-3 p-2" style={{ border: '0px' }}>
                  <div className="d-flex p-2 mt-2 justify-content-start rounded">
                    <div className="cardIcon" style={{ backgroundColor: '#D2B4DE' }}>
                      <i className="bi bi-file-text" style={{ color: '#5B2C6F' }}></i>
                    </div>
                    <div className="cardIconText d-flex flex-column p-2">
                      <span style={{ color: '#797A79' }}>Orders</span>
                      <p style={{ color: '#000', fontSize: '20px', fontWeight: 'bold', margin: '0px' }}><b>$2.4K</b></p>
                      <p style={{ color: 'red', margin: '0px', fontSize: '14px', alignItems: 'center' }}><b><span style={{ fontSize: '16px', fontWeight: 'bolder', }}>↓</span>2%</b>this month</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-lg-3 col-sm-3'>
                <div className="card cardchild mt-3 p-2" style={{ border: '0px' }}>
                  <div className="d-flex p-2 mt-2 justify-content-start rounded">
                    <div className="cardIcon" style={{ backgroundColor: '#AED6F1' }}>
                      <i className="bi bi-archive" style={{ color: '#21618C' }}></i>
                    </div>
                    <div className="cardIconText d-flex flex-column p-2">
                      <span style={{ color: '#797A79' }}>Balance</span>
                      <p style={{ color: '#000', fontSize: '20px', fontWeight: 'bold', margin: '0px' }}><b>$2.4K</b></p>
                      <p style={{ color: 'darkgreen', margin: '0px', fontSize: '14px', alignItems: 'center' }}><b><span style={{ fontSize: '16px', fontWeight: 'bolder', }}>↓</span>2%</b>this month</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-lg-3 col-sm-3'>
                <div className="card cardchild mt-3 p-2" style={{ border: '0px' }}>
                  <div className="d-flex p-2 mt-2 justify-content-start rounded">
                    <div className="cardIcon" style={{ backgroundColor: '#FADBD8' }}>
                      <i className="bi bi-handbag" style={{ color: '#E74C3C' }}></i>
                    </div>
                    <div className="cardIconText d-flex flex-column p-2">
                      <span style={{ color: '#797A79' }}>Total Sales</span>
                      <p style={{ color: '#000', fontSize: '20px', fontWeight: 'bold', margin: '0px' }}><b>$89K</b></p>
                      <p style={{ color: 'darkgreen', margin: '0px', fontSize: '14px', alignItems: 'center' }}><b><span style={{ fontSize: '16px', fontWeight: 'bolder', }}>🠕</span>11%</b>this week</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row p-3 md-12 lg-12 sm-12 justify-content-between">
              <div className="col-md-8 col-lg-8 col-sm-8">
                <div className="card cardchildchild p-2" style={{ border: '0px' }}>
                  <div className="d-flex flex-row justify-content-between align-items-center mt-1 p-2">
                    <div className="d-flex flex-column">
                      <span className="name"><b>Overview</b></span>
                      <span className="braceletid">Monthly Earning</span>
                    </div>
                    <div className="d-flex flex-row">
                      <span className="braceletid" style={{ marginRight: "5px" }}>Quarterly</span>
                      <i className="bi bi-chevron-down braceletid"></i>
                    </div>
                  </div>
                  <div className="d-flex flex-row justify-content-around align-items-end mt-1 gap-2 position-relation">
                    <div className="monthDiv" style={{ height: '120px' }}></div>
                    <div className="monthDiv" style={{ height: '70px' }}></div>
                    <div className="monthDiv"></div>
                    <div className="monthDiv" style={{ height: '130px' }}></div>
                    <div className="monthDiv" style={{ height: '150px' }}></div>
                    <div className="monthDiv" style={{ height: '50px' }}></div>
                    <div className="monthDiv" style={{ height: '150px' }}></div>
                    <div className="monthDiv" style={{ backgroundColor: '#3140EF' }}></div>
                    <div className="monthDiv" style={{ height: '180px' }}></div>
                    <div className="monthDiv" style={{ height: '140px' }}></div>
                    <div className="monthDiv" style={{ height: '110px' }}></div>
                    <div className="monthDiv" style={{ height: '150px' }}></div>
                  </div>
                  <div className="d-flex flex-row justify-content-around align-items-end gap-2 mt-3 position-relative">
                    <span className="monthText">Jan</span>
                    <span className="monthText">Feb</span>
                    <span className="monthText">Mar</span>
                    <span className="monthText">Apr</span>
                    <span className="monthText">May</span>
                    <span className="monthText">Jun</span>
                    <span className="monthText">Jul</span>
                    <span className="monthText">Aug</span>
                    <span className="monthText">Sep</span>
                    <span className="monthText">Oct</span>
                    <span className="monthText">Nov</span>
                    <span className="monthText">Dec</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3 col-sm-3">
                <div className="card cardchildchild p-2" style={{ border: '0px' }}>
                  <div className="d-flex flex-row justify-content-between align-items-center mt-1 p-2">
                    <div className="d-flex flex-column">
                      <span className="name"><b>Customers</b></span>
                      <span className="braceletid">Customers that buy products</span>
                    </div>
                  </div>
                  <div className="align-self-center mt-3 pb-4">
                    <div class="progress blue">
                      <span class="progress-left">
                        <span class="progress-bar"></span>
                      </span>
                      <span class="progress-right">
                        <span class="progress-bar"></span>
                      </span>
                      <div class="progress-value">
                        <b>65%</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row d-flex p-3">
              <div class="col-lg-12 col-md-12 col-sm-12 grid-margin stretch-card" >
                <div class="card">
                  <div class="card-body">
                    <div class='row'>
                      <div class="col-lg-8 col-md-8 col-sm-2"><h4 className="name mb-0"><b>Product Sell</b></h4></div>
                      <div class='col-lg-2 col-md-2 col-sm-2 p-0'>
                        <div className='d-flex flex-row search-container'>
                          <div className='search-icon' style={{ fontSize: '13px', top: 12 }}>
                            <i className="bi bi-search"></i>
                          </div>
                          <input type="text" placeholder="search" color='#d3d3d3' className='input-search' style={{ width: '120px', fontSize: '15px', padding: "0px 30px 0px 33px" }} />
                        </div>
                      </div>
                      <div class='col-lg-2 col-md-2 col-sm-2 p-0'>
                        <div className='d-flex flex-col'>
                          <select className="select mt-0">
                            <option className='Last 30 days'>Last 30 days</option>
                            <option className='Last 15 days'>Last 15 days</option>
                            <option className='Last 7 days'>Last 7 days</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th className='table-th'>Product Name</th>
                            <th></th>
                            <th className='table-th'>Stock</th>
                            <th className='table-th'>Price</th>
                            <th className='table-th'>Total Sales</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div class="d-flex flex-row justify-content-start align-items-center">
                                <div><img src='https://pngimg.com/d/bicycle_PNG5376.png' className='img-rounded table-img' alt='cycle'></img></div>
                                <div class="col">
                                  <div><span><b>Bicycle</b></span></div>
                                  <div><span className='prodName'>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span></div>
                                </div>
                              </div>
                            </td>
                            <td></td>
                            <td>32 in stock</td>
                            <td><b>$45.99</b></td>
                            <td>20</td>
                          </tr>
                          <tr>
                            <td>
                              <div class="d-flex flex-row justify-content-start align-items-center">
                                <div><img src='https://freepngimg.com/thumb/car/3-2-car-free-download-png.png' className='img-rounded table-img' alt='car'></img></div>
                                <div class="col">
                                  <div><span><b>BMW Car</b></span></div>
                                  <div><span className='prodName'>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span></div>
                                </div>
                              </div>
                            </td>
                            <td></td>
                            <td>32 in stock</td>
                            <td><b>$45.99</b></td>
                            <td>20</td>
                          </tr>
                          <tr>
                            <td>
                              <div class="d-flex flex-row justify-content-start align-items-center">
                                <div><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE8w2XisAeoaCuCA-mu5Ny5qHGO8dcRnJjWA&usqp=CAU' className='img-rounded table-img' alt='car'></img></div>
                                <div class="col">
                                  <div><span><b>ALTROZ Car</b></span></div>
                                  <div><span className='prodName'>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span></div>
                                </div>
                              </div>
                            </td>
                            <td></td>
                            <td>32 in stock</td>
                            <td><b>$45.99</b></td>
                            <td>20</td>
                          </tr>
                          <tr>
                            <td>
                              <div class="d-flex flex-row justify-content-start align-items-center">
                                <div><img src='https://atlas-content-cdn.pixelsquid.com/stock-images/potted-plant-flower-pot-mdm41mF-600.jpg' className='img-rounded table-img' alt='plant'></img></div>
                                <div class="col">
                                  <div><span><b>Abstract 3d</b></span></div>
                                  <div><span className='prodName'>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span></div>
                                </div>
                              </div>
                            </td>
                            <td></td>
                            <td>32 in stock</td>
                            <td><b>$45.99</b></td>
                            <td>20</td>
                          </tr>
                          <tr>
                            <td>
                              <div class="d-flex flex-row justify-content-start align-items-center">
                                <div><img src='https://atlas-content-cdn.pixelsquid.com/stock-images/potted-plant-flower-pot-mdm41mF-600.jpg' className='img-rounded table-img' alt='plant'></img></div>
                                <div class="col">
                                  <div><span><b>Abstract 3d</b></span></div>
                                  <div><span className='prodName'>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span></div>
                                </div>
                              </div>
                            </td>
                            <td></td>
                            <td>32 in stock</td>
                            <td><b>$45.99</b></td>
                            <td>20</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}
