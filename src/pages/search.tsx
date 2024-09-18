import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/common';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const SearchSchema = z.object({
  query: z.string().min(1, 'Search query cannot be empty'),
});

const SearchPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(SearchSchema),
  });
  const [results, setResults] = useState<any[]>([]);

  const onSubmit = async (data: { query: string }) => {
    const res = await fetch(`/api/search?q=${data.query}`);
    const resultData = await res.json();
    setResults(resultData);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Search</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
        <Input label="Search Query" {...register('query')} error={errors.query?.message} />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Search
        </button>
      </form>
      <ul>
        {results.map((result, idx) => (
          <li key={idx} className="p-4 border rounded mb-2">
            {result.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;
