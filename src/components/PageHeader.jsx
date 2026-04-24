export default function PageHeader({ title, breadcrumb, children }) {
  const renderBreadcrumb = () => {
    if (Array.isArray(breadcrumb)) return breadcrumb.join(" / ");
    return breadcrumb;
  };

  return (
    <div className="mb-6 flex justify-between items-center">
      <div>
        <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
        <p className="text-slate-400 text-sm">
          {renderBreadcrumb()}
        </p>
      </div>

      <div>{children}</div>
    </div>
  );
}