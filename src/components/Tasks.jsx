import { CheckIcon, ChevronRightIcon, Trash2 } from "lucide-react";
import Button from "./Button";
import { useNavigate } from "react-router";

function Tasks({tasks, onTaskClick, onTaskClickDelete}){
    const navigate = useNavigate()

    function onSeeDetailsClick(task) {
        const query = new URLSearchParams();
        query.set('title', task.title);
        query.set('description', task.description);
        navigate(`/task?${query.toString()}`)
    };

    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                    <button
                        onClick={() => onTaskClick(task.id)} 
                        className={`text-left w-full flex items-center gap-2 p-2 rounded-md text-white 
                            cursor-pointer hover:bg-slate-500 transition-colors 
                            ${task.isCompleted ? "bg-green-500 line-through" : "bg-slate-400"}
                        `}
                    >
                        {task.isCompleted && <CheckIcon />}
                        {task.title}
                
                    </button>

                    <Button 
                        onClick={() => onSeeDetailsClick(task)}
                    >
                        <ChevronRightIcon />
                    </Button>
                    <Button 
                        onClick={() => onTaskClickDelete(task.id)}
                    >
                        <Trash2 />
                    </Button>
                </li>
            ))}
        </ul>
    );
}

export default Tasks;