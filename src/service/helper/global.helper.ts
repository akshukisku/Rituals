import { toast } from "sonner"

export const logout = (navigate:any)=>{
    toast.success("logout Successfully")
    navigate("/login");
}