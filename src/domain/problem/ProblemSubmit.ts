enum JudgeStatus {
  Pending,
  Judging,
  Accepted,
  WrongAnswer,
  TimeLimitExceeded,
  MemoryLimitExceeded,
  RuntimeError,
  CompileError,
  SystemError,
  OtherError,
}

export class ProblemSubmit {
  private readonly problemId: number
  private readonly code: string
  private judgeStatus: JudgeStatus = JudgeStatus.Pending

  constructor(problemId: number, code: string) {
    this.problemId = problemId
    this.code = code
  }

  async submit(): Promise<void> {}
}
