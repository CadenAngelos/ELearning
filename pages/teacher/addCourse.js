import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import Layout from '../../layouts/Layout'
import styles from '../../styles/teacher/addCourse0.module.css'

export default addCourse;

function addCourse() {
    const validationSchema = Yup.object().shape({
      name: Yup.string()
          .required('Tên không được trống.'),
      type: Yup.string(),
      about: Yup.string()
          .max(10000,'Mô tả không quá 10000 ký tự.'),
      accept: Yup.bool()
          .oneOf([true], 'Bạn phải cam kết cho khóa học của mình.')
    });

    const formOptions = {
        mode: 'onChange',
        resolver: yupResolver(validationSchema)};
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(data) {
        // display form data on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        return false;
    }
  return (
    <Layout>
        <div className={styles.add_course}>
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                        <div className={styles.title}>ĐĂNG KÝ KHÓA HỌC MỚI</div>
                        <p className="mt-1 text-sm text-gray-600">
                            Thông tin về khóa học của bạn sẽ được gửi tới admin. 
                            Sau khi gửi yêu cầu vui lòng chờ thông tin phản hồi của admin.
                        </p>
                    </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="shadow sm:rounded-md sm:overflow-hidden">
                            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Tên khóa học</label>
                                <input 
                                    name="name" type="text" {...register('name')} 
                                    className={`form-control ${errors.name ? 'is-invalid' : ''} shadow-sm h-8 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md`} 
                                />
                                <div className="invalid-feedback text-xs text-red-500">{errors.name?.message}</div>
                            </div>
                            <div className=" my-5">
                                <label className="block text-sm font-medium text-gray-700">Lĩnh vực</label>
                                <select 
                                name="type" {...register('type')} 
                                className={`form-control ${errors.type ? 'is-invalid' : ''} mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:border-indigo-500 sm:text-sm`}>
                                    <option value="LapTrinh">Lập trình</option>
                                    <option value="Toan">Toán học</option>
                                    <option value="KhoaHoc">Khoa học</option>
                                    <option value="Khac">Khác</option>
                                </select>
                            </div>
                            <div className=" my-5">
                                <label className="block text-sm font-medium text-gray-700">Mô tả</label>
                                <textarea
                                    id="about"
                                    name="about"
                                    rows={5}
                                    defaultValue={''}
                                    {...register('about')} 
                                    className={`form-control ${errors.about ? 'is-invalid' : ''} shadow-sm  mt-1 block w-full sm:text-sm border border-gray-300 rounded-md`}
                                />
                                <div className="invalid-feedback text-xs text-red-500">{errors.about?.message}</div>
                            </div>
                            <div className=" my-5">
                                <label className="block text-sm font-medium text-gray-700">Video giới thiệu cho khóa học</label>
                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                    <div className="space-y-1 text-center">
                                        <div className="flex text-sm text-gray-600">
                                            <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                <span>Upload a file</span>
                                                <input id="video" name="video" type="file" className="sr-only" />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs text-gray-500">MP4, AVI,.. up to 100MB</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" my-5">
                                <input 
                                    name="accept" 
                                    type="checkbox" 
                                    {...register('accept')} 
                                    id="accept" 
                                    className={`form-check-input ${errors.accept ? 'is-invalid' : ''}`} 
                                />
                                <label className=" ml-2 text-sm font-medium text-gray-700">Cam kết khóa học thực hiện đúng những chính sách của website.</label>
                                <div className="invalid-feedback text-xs text-red-500">{errors.accept?.message}</div>
                            </div>
                            <div className="px-4 py-3 text-right sm:px-6">
                                <button type="submit" className={styles.btn_add}>
                                    Gửi yêu cầu
                                </button>
                            </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </Layout>
  )
}