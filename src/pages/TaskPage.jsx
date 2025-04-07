import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router";
import Title from "../components/Title";

function TaskPage() {
    const [searchParamns] = useSearchParams();
    const title = searchParamns.get("title");
    const description = searchParamns.get("description");
    const navigate = useNavigate();
    return (
        <div className="h-screen w-screen bg-slate-500 p-6">
            <div className="w-[500px] mx-auto space-y-3">
                <div className="flex justify-center relative mb-6">
                    <button 
                    onClick={() => navigate(-1)}
                    className="absolute left-0 top-0 bottom-0 text-slate-100">
                        <ChevronLeftIcon />
                    </button>
                    <Title>
                        Detalhe das Tarefas
                    </Title>
                </div>
                

                <div className="bg-slate-400 p-4 rounded-md">
                    <h2 className="text-xl text-slate-600 font-bold">
                        {title}
                    </h2>
                    <p className="text-slate-600">
                        {description}
                    </p>
                </div>
            </div>
        </div>)
}

export default TaskPage;