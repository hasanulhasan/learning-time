// question design
<div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
  <article className="space-y-8 dark:bg-gray-800 dark:text-gray-50">
    <div className="space-y-6">
      <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl p-4">{question}</h1>
    </div>
  </article>
  <div>
    <div className="flex flex-wrap py-6 border-t border-dashed dark:border-gray-400">
      <a rel="noopener noreferrer" href="#" className="text-xl px-3 py-3 rounded-sm hover:underline dark:bg-violet-400 dark:text-gray-900">{correctAnswer}</a>
    </div>
  </div>
</div>