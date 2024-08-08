

const CreateAccount=()=>{
    return(
        <div>
            <form>
                <input type="text"
                placeholder="Enter Name"
                
                /><br/>
                <input
                type="number"
                /><br/>
                <select>
                <option type="disabled" > Account Type</option>

                    <option value="Salary Account">Salary Account</option>
                    <option value="Current Account">Current Account</option>
                    <option value="Saving Account">Saving Account</option>

                </select>

                
                
            
            </form>
        </div>
    )
}

export default CreateAccount;