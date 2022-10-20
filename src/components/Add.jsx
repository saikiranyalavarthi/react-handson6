
import '../App.css'
import React from 'react';
import {Link} from 'react-router-dom';


class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            students : []
        }
    }

    update = () => {
        let arr = this.props.stud;

        let e1 = document.getElementById("ip1");
        let e2 = document.getElementById("ip2");
        let e3 = document.getElementById("ip3");
        let e4 = document.getElementById("ip4");

        let name = e1.value, age = e2.value, course = e3.value, batch = e4.value;
        let temp = [name, age, course, batch];
        arr.push(temp);
        this.props.method(temp);

    }

    render() {
        return(
            <div>
                <div className='fields'>
                    <div>
                    <fieldset><legend style={{color:"red"}}>Name</legend>
                            <input   id ="ip1" className='inp1' type="text" />
                            </fieldset>
                    </div>
                    <div>
                        <fieldset><legend style={{color:"red"}}>Age</legend>
                        <input id ="ip2" className='inp1' type="text" />
                        </fieldset>
                    </div>
                    <div>
                        <fieldset><legend style={{color:"red"}}>Course</legend>
                        <input id ="ip3" className='inp1' type="text" />
                        </fieldset>
                    </div>
                    <div>
                        <fieldset><legend style={{color:"red"}}>Batch</legend>
                        <input id ="ip4" className='inp1' type="text" />
                        </fieldset>
                    </div>
                </div>

                <div className="fix-3">
                    <Link to="/students"><button className='three' id='student-add'>Cancel</button></Link>
                    <Link to="/students"><button className='four' onClick={this.update} id='student-add'>Update</button></Link>
                </div>
                

            </div>
        );
    }
}

export default Add;