interface IRouter{
    path:string;
    element:React.ReactNode;
    children?:IRouter[];
    private:boolean;
}
export type {IRouter};