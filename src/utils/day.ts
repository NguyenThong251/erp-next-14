export const formatDate = (dateString: string | undefined): string | null => {
  const date = dateString ? new Date(dateString) : new Date();
  if (isNaN(date.getTime())) {
    return "";
  }

  return `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${date.getFullYear()}`;
};

export const calculateTimeRemaining = (dueDate: string | undefined): string => {
  if (!dueDate) return "Không có hạn";
  
  const now = new Date();
  const due = new Date(dueDate);
  
  if (isNaN(due.getTime())) return "Ngày không hợp lệ";
  
  const diffTime = due.getTime() - now.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  
  if (diffTime < 0) {
    return "Đã quá hạn";
  }
  
  return `${diffDays} ngày ${diffHours} giờ`;
};

export const getTaskStatus = (dueDate: string | undefined, progress: number): string => {
  if (!dueDate) return "Chưa có hạn";
  
  const now = new Date();
  const due = new Date(dueDate);
  
  if (progress >= 100) return "Đã hoàn thành";
  
  if (now > due) return "Quá hạn";
  
  const diffTime = due.getTime() - now.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays <= 3) return "Gần đến hạn";
  
  return "Đang thực hiện";
};
