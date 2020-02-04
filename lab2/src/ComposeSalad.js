import React from "react";

class ComposeSalad extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          foundation: 'Sallad',
          protien: 'Kyckling',
          extra: 'Avokado',
          dressing: 'Ceasardressing'
        };

        this.handleChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event){
        const target = target.event;
        const value = target.value;
        this.setState({
            [target.name]: value
        });
    }
    handleSubmit(event) {
    alert('value: ' + this.stateFoundation.value);
    event.preventDefault();
    }

  render() {
    const inventory = this.props.inventory;
    // test for correct ussage, the parent must send this datastructure
    if (!inventory) {
      alert("inventory is undefined in ComposeSalad");
    }
    let foundations = Object.keys(inventory).filter(
      name => inventory[name].foundation
    );
    let protiens = Object.keys(inventory).filter(
        name => inventory[name].protien
    );
    return (
     <form onSubmit={this.handleSubmit}>
         <label>
             <h4>Välj bas</h4>
             <select value= {this.state.foundation.value} onChange={this.handleInputChange}>
                {foundations.map(name => (
                <option key={name}>{name}</option>
                ))}
             </select>
         </label>
         <div>
          <label>
             Välj protien  
                {protiens.map(name => (
                <div>
                    <input id={name} name={name} type="checkbox" onChange={this.handleInputChange}/>
                        <label for={name}>
                            {name}
                        </label>
                </div>
                ))}

               {/*   <input name="kycklingfile" type="checkbox" value={this.state.protien} onChange={this.handleInputChange}/>  
                 <label>
                 Kycklingfile 
                
                </label>   */}
             
             {/* <div>
                 <label>
                Rökt kalkonfile: 
                <input name="rökt kalkonfile" type="checkbox" value={this.state.protien} onChange={this.handleInputChange}/>   
                </label> 
             </div> 
           */}
          </label>     
        </div>
         
         
         <input type="submit" value="Submit"/>
     </form>

    );
  }
}

export default ComposeSalad;

{/* <div className="container">
        <h4>Välj bas</h4>
        <ul>
          {foundations.map(name => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div> */}