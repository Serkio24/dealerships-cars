import { isString, IsString, MaxLength } from "class-validator";
import { CreateDateColumn } from "typeorm/browser/decorator/columns/CreateDateColumn.js";

export class CreateCarDto {
    @IsString()
    @MaxLength(10)
    plate: string;

    @IsString()
    @MaxLength(50)
    brand: string;

    @IsString()
    @MaxLength(50)
    model: string;

    @IsString()
    @MaxLength(50)
    year: string;

    @IsString()
    @MaxLength(50)
    price: string;

    @IsString()
    @MaxLength(20)
    status: string;

    @IsString()
    @MaxLength(20)
    dealership_id: string;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

}
