import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const GetCurrentUserById = createParamDecorator((data:undefined ,content:ExecutionContext):number=>{
    const request = content.switchToHttp().getRequest()
    if(!data) return request.user['sub'];
    return request.user['sub']
})