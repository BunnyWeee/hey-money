class PagesController < ApplicationController
  def home
  end

  def create
    @money = Money.new(find_params)
    if @money.save
      redirect_to root, notice: "新增成功！"
    else
      redirect_to root, notice: "新增失敗！"
    end
  end

  private
  def find_params
    params.require(:money).permit(:expense_type, :title, :amount, :description)
  end
end
