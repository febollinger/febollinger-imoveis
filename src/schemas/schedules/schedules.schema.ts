import {z} from "zod";

const createScheduleSchema = z.object({
    date:z.string(),
    hour:z.string(),
    realEstateId: z.number()
})

const returnSchedulesSchema = createScheduleSchema.extend({
    id:z.number(),
    userId:z.number()
})

export {
    createScheduleSchema,
    returnSchedulesSchema
}