import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const GetCurrentUser = createParamDecorator((data:string|undefined ,content:ExecutionContext)=>{
    const request = content.switchToHttp().getRequest()
    if(!data) return request.user;
    return request.user[data]
})