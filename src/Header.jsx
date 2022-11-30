import React, { useEffect, useState } from 'react';
import axios from 'axios'
import '/Users/admin/RealEstateApp/real-estate/src/Header.css'

function Header() {
    const [RealEstateData, setRealEstateData]=useState([])

    console.log("this is real estate data",RealEstateData);
    // calling spi(JSON)
    useEffect(()=>{
        axios.get("https://raw.githubusercontent.com/GAYATRIBHAGWAT11/RealEstateJSON/master/RealEstate.json")
        .then((res)=>{
        //    console.log(res.data) 
        setRealEstateData(res.data)
        })
    },[])
    return (
        <>
            <div className="HeadContainer">
                <div className="subcontainer">
                    <div className="div1">
                        <p className="location">Location</p>
                        <select id="location">
                            <option value="Mumbai">Mumbai</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Nashik">Nashik</option>
                        </select>
                        <div className="vertical"></div>
                    </div>
                    <div className="div2">
                        <p className="location">When</p>
                        <select id="Date">
                            <option value="date">25/11/2022</option>
                            <option value="date">23/11/2022</option>
                            <option value="date">21/11/2022</option>
                            <option value="date">20/11/2022</option>
                            <option value="date">28/11/2022</option>
                            <option value="date">30/11/2022</option>
                            <option value="date">15/11/2022</option>
                            <option value="date">02/12/2022</option>
                            <option value="date">29/11/2022</option>
                            <option value="date">24/11/2022</option>
                            <option value="date">10/12/2022</option>
                        </select>
                        <div className="vertical"></div>
                    </div>
                    <div className="div3">
                        <p className="price">Price</p>
                        <select id="price">
                            <option value="Mumbai">10 - 30 lac</option>
                            <option value="Delhi">30-50 lac</option>
                            <option value="Nashik">50- 70 lac</option>
                        </select>
                        <div className="vertical"></div>
                    </div>
                    <div className="div3">
                        <p className="ptype">Property Type</p>
                        <select id="price">
                            <option value="price">House</option>
                            <option value="price">Room</option>
                            <option value="price">Hotel</option>
                            <option value="price">Flat</option>
                        </select>
                    </div>
                    <div className="div4">
                        <div className="search">
                            <button className='search'>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;