import { saveEventTypes, saveTicketData } from "@redux/slices/globalSlice"
import { Api } from "@services/config"
import toast from "react-hot-toast"
type ticketType = {
    eventType: string
}

export const fetchTicketData = (query: string, disableLoader: Function): Function => {
    return (dispatch: Function) => {
        Api.get(`/tickets?${query}`).then((response) => {
            var eventTypesMap = response.data.reduce((acc: Object, curr: ticketType) => {
                if (acc[curr.eventType]) acc[curr.eventType] += 1
                else acc[curr.eventType] = 1

                return acc;
            }, {})
            dispatch(saveEventTypes(eventTypesMap))
            dispatch(saveTicketData(response.data))
        }).catch((err) => {
            toast.error(err.message)
        }).finally(() => {
            disableLoader(false)
        })
    }
}



export const postTicketData = (data: Object, disableLoader: Function, saveState: Function): Function => {
    return (dispatch: Function) => {
        Api.post(`/ticket`, data).then((response) => {
            toast.success("Successfully Saved")
            dispatch(fetchTicketData('', () => { }))
            saveState({})
        }).catch((err) => {
            toast.error(err.message)
        }).finally(() => {
            disableLoader(false)
        })
    }
}