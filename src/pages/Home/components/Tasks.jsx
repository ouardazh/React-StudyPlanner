import { useState,useEffect } from 'react';
import './Tasks.css';
function Tasks(){

    const [task, setTask] = useState([
        {id: 1, title:"task10", priority:"High", completed:false}
    ]);

    useEffect(()=> {
    const saveTask = localStorage.getItem("task");
    if (saveTask){
    setTask(JSON.parse(saveTask));
    }
    }, []);

    useEffect(()=>{localStorage.setItem("task",JSON.stringify(task));}, [task])
    const [title, setTitle] = useState("");
    const [priority, setpriority] = useState("High");
    const [editTsk, setEditTsk] = useState(null);

    // Add Task------------------------------------------------------------------------------------------------------
    function addTask(tsk){
        tsk.preventDefault();
        const newTask ={
            title: title,
            priority: priority,
            completed: false
        }
        
        
        if (editTsk){
            setTask(filterTask().map((item)=> item.id === editTsk.id ? newTask :item))
            setEditTsk(null)
        }

        

        else{
            setTask([...task, newTask])
        }

        setTitle("");
        
    }
    // Delete--------------------------------------------------------------------------------------------------------
    function deleteTask(id){
        setTask(task.filter((item)=>
            item.id !== id
        ))
    }

    // Edite-------------------------------------------------------------------------------------------------------
    function editeTask(item){
        setEditTsk(item)
        setTitle(item.title);
        setpriority(item.priority)

    }
    const completdTsk = task.filter(item => item.completed).length
    const pendingTsk = task.filter(item => !item.completed).length
    function completedTask(id){
        setTask(filterTask().map((item) => 
            item.id === id 
        ? { ...item, completed: !item.completed}
        :item
    ))
    }
    //Tasks Filter-------------------------------------------------------------------------------------------------
    const [filter, SetFilter]= useState("All");
    function filterTask(){

       return task.filter((item)=>{
            if(filter === "completed"){
                return item.completed;
            }
            else if (filter ==="pending"){
                return !item.completed;
            }
            else{
                return true;
            }

        })
    }
    return(
        <>

         <section className='homeSection'>
            <div>
                <p className='paragraphBlue'>REACT PRACTICE PROJECT</p>
                <h1 className='firstTitle'>My Study Planner</h1>
                <p className='paragraphGris'>Manage your learning tasks, keep them after refresh, and track a study session.</p>
                <div className='container'>
                    <div className='firstBox'>
                        <p>Total Tasks</p>
                        <h3> {task.length} </h3>
                    </div>

                    <div className='firstBox' >
                        <p>Completed</p>
                        <h3> {completdTsk} </h3>
                        
                    </div>

                    <div className='firstBox'>
                        <p>Pending</p>
                        <h3> {pendingTsk} </h3>
                    </div>
                </div>

              

            </div>

        
        </section>
       
    <section className='tasksSection'>
        <h3 className='titletsks'>Add a task</h3>
         <p className='paragraphGris'>Use a controlled form to create a new task.</p>

         <form action="" onSubmit={addTask}>
            <div>
                <label htmlFor="">Task title</label> <br />
                <input type="text" placeholder='e.g Practice React hooks' onChange={(e)=>setTitle(e.target.value)}  value={title}/>
            </div>

            <div>
                <label htmlFor="">Priority</label> <br />
                <select name="" id="" onChange={(e) =>setpriority(e.target.value)} value={priority}>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </div>

            <button className='addBtn' type='submit'>+ Add task</button>
         </form>

        
    </section>

    <section className='secondTasksSection'>
         <div className='containerFilter'>
            <div>
                <h3 className='titletsks'>Your tasks</h3>
                <p className='paragraphGris'>Check tasks off, edite them, or remove them.</p>
            </div>
            
            <div className='filterBtn'>
                <button onClick={() => SetFilter("all")}>All</button>
                <button onClick={() => SetFilter("pending")}>Pending</button>
                <button onClick={() => SetFilter("completed")}>Completed</button>
            </div>
         </div>
            {filterTask().map((item)=>(
                <div className='youTaskContainer' key={item.id}>
                    <div className='containertask'>
                        <input checked={item.completed} onChange={()=>completedTask(item.id)} type="checkbox" name="" id="" />
                        <div>
                           <h3 className='titleTask'> {item.title} </h3>
                           <div className='completedContainer'>
                            <p> {item.priority} </p> 
                            <p> {item.completed ? "Completed" : "pending"} </p>
                           </div>
                           
                        </div>

                        
                    </div>
                    
                        <div className='containerBtn'>
                            <button onClick={()=>editeTask(item)} className='editeBtn'>Edite</button>
                            <button onClick={()=>deleteTask(item.id)} className='deleteBtn'>Delete</button>
                        </div>
                    
                </div>
            ))}
         
    </section>

    </>
    )
}
export default Tasks;