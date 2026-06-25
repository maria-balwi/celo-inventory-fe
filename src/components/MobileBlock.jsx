export default function MobileBlock({ children }) {
  return (
    <>
      <div className="flex lg:hidden min-h-screen bg-[#0f1117] flex-col items-center justify-center px-8 text-center">
        <div className="text-5xl mb-6"></div>
        <h1 className="text-xl font-semibold text-slate-100 mb-2">Desktop Only</h1>
        <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
          The CBSI Inventory System is designed for laptop and desktop use only. 
          Please open this device on a device with a larger screen. 
        </p>
        <div className="mt-8 px-4 py-2 rounded-lg bg-[#161b27] border border-[#252d3d] text-xs text-slate-500">
          Minimum screen width: 1024px
        </div>
      </div>

      <div className="hidden lg:flex min-h-screen w-full">
        {children}
      </div>
    </>
  );
}