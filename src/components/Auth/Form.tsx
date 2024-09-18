import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {  useToast } from '@/hooks/use-toast'
import sendPostRequest from '@/server/addProject'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'

import { useMask } from '@react-input/mask';
import 'react-datepicker/dist/react-datepicker.css'
import { SubmitHandler, useForm } from 'react-hook-form'

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { z } from 'zod'

// Validation schema using Zod
const formSchema = z.object({
	fullname: z.string().min(5, {
		message: 'Foydalanuvchi nomi kamida 5 ta belgidan iborat boʻlishi kerak.',
	}),
	phone_number: z.string().min(13, {
		message: 'Telefon raqam to‘liq kiritilishi kerak.',
	}),
	description: z.string().min(20, {
		message: 'Tavsif kamida 20 ta belgidan iborat boʻlishi kerak.',
	}),
})

// Form data type inferred from schema
type FormData = z.infer<typeof formSchema>

// Function to send a POST request

export function ApplicationForm() {
	const form = useForm<FormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			fullname: '',
			phone_number: '+998',
			description: '',
		},
	})

	const { toast } = useToast()
const [loading, setLoading] = useState<boolean>(false)
	// On form submit, make a POST request
	const onSubmit: SubmitHandler<FormData> = async (data) => {
		setLoading(true)
		const request  = await sendPostRequest(data)
		if(request.success === true){
			toast({
				title: `Xurmatli ${data.fullname}`,
				description:
					"Sizning loyihangiz muvaffaqiyatli ro'yxatga olindi",
			})
		}else{
			toast({
				title: `Raqamingiz: ${data.phone_number} `,
				description:
					'Telefon raqamingiz orqali loyiha yuborilgan, siz faqat bir marta yubora olasiz',
				variant: 'destructive',
			})
		}
		setLoading(false)
	}
	const inputRef = useMask({ mask: '+998 (__) ___-__-__', replacement: { _: /\d/ } });
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<div className="grid grid-cols-2 gap-y-6 gap-x-4 max-lg:grid-cols-1">
					<FormField
						control={form.control}
						name="fullname"
						render={({ field }) => (
							<FormItem>
								<FormLabel>To'liq ismingizni kiriting:</FormLabel>
								<FormControl>
									<Input placeholder="To'liq ismingizni kiriting" {...field} />
								</FormControl>
								<FormDescription>
									Ma'lumotlaringiz to'g'ri ekanligini tekshiring
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="phone_number"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Telefon raqamingizni kiriting:</FormLabel>
								<FormControl>
									<Input placeholder="To'liq ismingizni kiriting" {...field} ref={inputRef} />
								</FormControl>
								<FormDescription>
									Ma'lumotlaringiz to'g'ri ekanligini tekshiring
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<div>
					<FormField
						control={form.control}
						name="description"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Loyihangiz haqida ma'lumot kiriting:</FormLabel>
								<FormControl>
									<ReactQuill
										className="h-[200px] max-lg:pb-5  w-[460px] max-lg:w-[360px]"
										value={field.value}
										onChange={field.onChange}
										modules={{
											toolbar: [
												['bold', 'italic', 'underline', 'strike'],
												[{ list: 'ordered' }, { list: 'bullet' }],
												[{ align: [] }],
												['link', 'image', 'code-block'],
											],
										}}
										formats={[
											'bold',
											'italic',
											'underline',
											'strike',
											'list',
											'bullet',
											'align',
											'link',
											'image',
											'code-block',
										]}
										placeholder="Tavsifni kiriting"
									/>
								</FormControl>
							
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<hr />
				<div className="flex justify-end">
					<Button type="submit" className="text-lg max-lg:w-full" disabled={loading}>
						{loading ? 'Yuborilmoqda' : "Ma'lumotlarni yuborish"}
					</Button>
				</div>
			</form>
		</Form>
	)
}
