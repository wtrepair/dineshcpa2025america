import { FunctionComponent } from "react";
// import Badge from "./Badge"; // Remove unused import
import BlogCard from "./BlogCard";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-full text-center text-gray-900 font-text-xl-font-normal ${className}`}
      data-scroll-to="blog"
    >
      <div className="w-full text-2xl md:text-4xl font-extrabold my-8">
        Latest Posts
      </div>
      <div className="w-full bg-white flex flex-col items-center text-left text-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          <BlogCard
            cardHeader="/blog1.png"
            title="Smart Tax Strategies to Keep More of Your Hard-Earned Money"
            preview="Discover how with
          the right tax planning strategies, you can legally reduce your tax
          bill and keep more of your hard-earned money."
            blogId="1"
          />
          <BlogCard
            cardHeader="/blog2.webp"
            title="How to Optimize Your Business for Financial Growth"
            preview="Discover how from effective cash flow management to smart tax
          planning and cost control, structuring your finances properly can
          position your business for success"
            blogId="2"
          />
          <BlogCard
            cardHeader="/blog3.webp"
            title="Understanding the Latest Tax Changes: What You Need to Know"
            preview="Staying updated on the
          latest tax changes is crucial to ensuring compliance, maximizing
          deductions, and avoiding penalties."
            blogId="3"
          />
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
