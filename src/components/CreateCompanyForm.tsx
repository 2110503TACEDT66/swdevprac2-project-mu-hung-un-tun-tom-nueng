'use client';
import { useState } from 'react';
import Link from 'next/link';
import React from 'react';
import { FormEvent } from 'react';
import createCompany from '@/libs/createCompany';

type FormDataState = {
  name: string;
  address: string;
  website: string;
  desc: string;
  tel: string;
  picture: string | null;
};

const CreateCompanyForm = () => {
  const [formData, setFormData] = useState<FormDataState>({
    name: '',
    address: '',
    website: '',
    desc: '',
    tel: '',
    picture: null,
  });
  const [isAgreed, setIsAgreed] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsAgreed(event.target.checked);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name, address, website, desc, tel, picture } = formData;

    try {
      const response = await createCompany({
        name,
        address,
        website,
        desc,
        tel,
        picture,
      });

      if (!response.success) {
        throw new Error('Network response was not ok');
      }
      alert('Create successful');
    } catch (error) {
      console.error('An unexpected error happened:', error);
      alert('Create failed');
    }
  };

  return (
    <div className="z-50 space-y-2 p-20 sm:ml-72">
      <div className="mb-5 border-b-2 p-5 text-5xl">Create Company</div>
      <div className="flex h-full flex-col items-center bg-white px-3">
        <form className="mt-5">
          <div className="mb-3">
            <label
              className="mb-2 block text-sm font-medium text-gray-900"
              htmlFor="picture"
            >
              Picture
              <input
                type="text"
                id="picture"
                name="picture"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 
                                    text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                placeholder="URL"
              />
            </label>
          </div>
          <div className="mb-3">
            <label
              className="mb-2 block text-sm font-medium text-gray-900"
              htmlFor="name"
            >
              Company name
              <input
                type="text"
                required
                id="name"
                name="name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 
                                text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Company name"
              />
            </label>
          </div>

          <div className="mb-3">
            <label
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="address"
            >
              Address
              <input
                type="text"
                required
                id="address"
                name="address"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 
                                text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Address"
              />
            </label>
          </div>

          <div className="mb-3">
            <label
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="website"
            >
              Website
              <input
                type="text"
                required
                id="website"
                name="website"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 
                                text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Website"
              />
            </label>
          </div>

          <div className="mb-3">
            <label
              className="mb-2 block text-sm font-medium text-gray-900"
              htmlFor="description"
            >
              Description
              <input
                type="text"
                id="desc"
                name="desc"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 
                                text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Description"
              />
            </label>
          </div>

          <div className="mb-3">
            <label
              className="mb-2 block text-sm font-medium text-gray-900"
              htmlFor="tel"
            >
              Tel.
              <input
                type="text"
                id="tel"
                name="tel"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 
                                text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Tel."
              />
            </label>
          </div>

          <div className="mb-6 flex items-start">
            <label className="ms-2 flex flex-row text-sm font-medium text-gray-900">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="focus:ring-3 mr-2 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300"
              />
              <div className="mt-1">
                I agree with the{' '}
                <a href="#" className="text-blue1 hover:underline">
                  terms and conditions
                </a>
              </div>
            </label>
          </div>

          <div className="mb-6 flex items-start">
            <button
              className="w-full rounded-3xl bg-blue-200 px-5 py-2.5 text-center 
            text-sm font-medium text-white hover:bg-blue1"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCompanyForm;
