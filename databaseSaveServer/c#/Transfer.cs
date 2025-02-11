// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: transfer.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021, 8981
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
/// <summary>Holder for reflection information generated from transfer.proto</summary>
public static partial class TransferReflection {

  #region Descriptor
  /// <summary>File descriptor for transfer.proto</summary>
  public static pbr::FileDescriptor Descriptor {
    get { return descriptor; }
  }
  private static pbr::FileDescriptor descriptor;

  static TransferReflection() {
    byte[] descriptorData = global::System.Convert.FromBase64String(
        string.Concat(
          "Cg50cmFuc2Zlci5wcm90byJ0Cg5tb2RlbEluc2VydE1zZxIRCgltb2RlbE5h",
          "bWUYASABKAkSFwoPbW9kZWxGYW1pbHlOYW1lGAIgASgJEhAKCG1heFJhbmdl",
          "GAMgASgFEhEKCXNwaW5TcGVlZBgEIAEoBRIRCglmcmVxdWVuY3kYBSABKAVi",
          "BnByb3RvMw=="));
    descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
        new pbr::FileDescriptor[] { },
        new pbr::GeneratedClrTypeInfo(null, null, new pbr::GeneratedClrTypeInfo[] {
          new pbr::GeneratedClrTypeInfo(typeof(global::modelInsertMsg), global::modelInsertMsg.Parser, new[]{ "ModelName", "ModelFamilyName", "MaxRange", "SpinSpeed", "Frequency" }, null, null, null, null)
        }));
  }
  #endregion

}
#region Messages
public sealed partial class modelInsertMsg : pb::IMessage<modelInsertMsg>
#if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    , pb::IBufferMessage
#endif
{
  private static readonly pb::MessageParser<modelInsertMsg> _parser = new pb::MessageParser<modelInsertMsg>(() => new modelInsertMsg());
  private pb::UnknownFieldSet _unknownFields;
  [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
  [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
  public static pb::MessageParser<modelInsertMsg> Parser { get { return _parser; } }

  [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
  [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
  public static pbr::MessageDescriptor Descriptor {
    get { return global::TransferReflection.Descriptor.MessageTypes[0]; }
  }

  [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
  [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
  pbr::MessageDescriptor pb::IMessage.Descriptor {
    get { return Descriptor; }
  }

  [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
  [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
  public modelInsertMsg() {
    OnConstruction();
  }

  partial void OnConstruction();

  [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
  [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
  public modelInsertMsg(modelInsertMsg other) : this() {
    modelName_ = other.modelName_;
    modelFamilyName_ = other.modelFamilyName_;
    maxRange_ = other.maxRange_;
    spinSpeed_ = other.spinSpeed_;
    frequency_ = other.frequency_;
    _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
  }

  [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
  [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
  public modelInsertMsg Clone() {
    return new modelInsertMsg(this);
  }

  /// <summary>Field number for the "modelName" field.</summary>
  public const int ModelNameFieldNumber = 1;
  private string modelName_ = "";
  [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
  [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
  public string ModelName {
    get { return modelName_; }
    set {
      modelName_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
    }
  }

  /// <summary>Field number for the "modelFamilyName" field.</summary>
  public const int ModelFamilyNameFieldNumber = 2;
  private string modelFamilyName_ = "";
  [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
  [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
  public string ModelFamilyName {
    get { return modelFamilyName_; }
    set {
      modelFamilyName_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
    }
  }

  /// <summary>Field number for the "maxRange" field.</summary>
  public const int MaxRangeFieldNumber = 3;
  private int maxRange_;
  [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
  [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
  public int MaxRange {
    get { return maxRange_; }
    set {
      maxRange_ = value;
    }
  }

  /// <summary>Field number for the "spinSpeed" field.</summary>
  public const int SpinSpeedFieldNumber = 4;
  private int spinSpeed_;
  [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
  [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
  public int SpinSpeed {
    get { return spinSpeed_; }
    set {
      spinSpeed_ = value;
    }
  }

  /// <summary>Field number for the "frequency" field.</summary>
  public const int FrequencyFieldNumber = 5;
  private int frequency_;
  [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
  [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
  public int Frequency {
    get { return frequency_; }
    set {
      frequency_ = value;
    }
  }

  [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
  [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
  public override bool Equals(object other) {
    return Equals(other as modelInsertMsg);
  }

  [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
  [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
  public bool Equals(modelInsertMsg other) {
    if (ReferenceEquals(other, null)) {
      return false;
    }
    if (ReferenceEquals(other, this)) {
      return true;
    }
    if (ModelName != other.ModelName) return false;
    if (ModelFamilyName != other.ModelFamilyName) return false;
    if (MaxRange != other.MaxRange) return false;
    if (SpinSpeed != other.SpinSpeed) return false;
    if (Frequency != other.Frequency) return false;
    return Equals(_unknownFields, other._unknownFields);
  }

  [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
  [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
  public override int GetHashCode() {
    int hash = 1;
    if (ModelName.Length != 0) hash ^= ModelName.GetHashCode();
    if (ModelFamilyName.Length != 0) hash ^= ModelFamilyName.GetHashCode();
    if (MaxRange != 0) hash ^= MaxRange.GetHashCode();
    if (SpinSpeed != 0) hash ^= SpinSpeed.GetHashCode();
    if (Frequency != 0) hash ^= Frequency.GetHashCode();
    if (_unknownFields != null) {
      hash ^= _unknownFields.GetHashCode();
    }
    return hash;
  }

  [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
  [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
  public override string ToString() {
    return pb::JsonFormatter.ToDiagnosticString(this);
  }

  [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
  [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
  public void WriteTo(pb::CodedOutputStream output) {
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    output.WriteRawMessage(this);
  #else
    if (ModelName.Length != 0) {
      output.WriteRawTag(10);
      output.WriteString(ModelName);
    }
    if (ModelFamilyName.Length != 0) {
      output.WriteRawTag(18);
      output.WriteString(ModelFamilyName);
    }
    if (MaxRange != 0) {
      output.WriteRawTag(24);
      output.WriteInt32(MaxRange);
    }
    if (SpinSpeed != 0) {
      output.WriteRawTag(32);
      output.WriteInt32(SpinSpeed);
    }
    if (Frequency != 0) {
      output.WriteRawTag(40);
      output.WriteInt32(Frequency);
    }
    if (_unknownFields != null) {
      _unknownFields.WriteTo(output);
    }
  #endif
  }

  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
  [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
  [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
  void pb::IBufferMessage.InternalWriteTo(ref pb::WriteContext output) {
    if (ModelName.Length != 0) {
      output.WriteRawTag(10);
      output.WriteString(ModelName);
    }
    if (ModelFamilyName.Length != 0) {
      output.WriteRawTag(18);
      output.WriteString(ModelFamilyName);
    }
    if (MaxRange != 0) {
      output.WriteRawTag(24);
      output.WriteInt32(MaxRange);
    }
    if (SpinSpeed != 0) {
      output.WriteRawTag(32);
      output.WriteInt32(SpinSpeed);
    }
    if (Frequency != 0) {
      output.WriteRawTag(40);
      output.WriteInt32(Frequency);
    }
    if (_unknownFields != null) {
      _unknownFields.WriteTo(ref output);
    }
  }
  #endif

  [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
  [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
  public int CalculateSize() {
    int size = 0;
    if (ModelName.Length != 0) {
      size += 1 + pb::CodedOutputStream.ComputeStringSize(ModelName);
    }
    if (ModelFamilyName.Length != 0) {
      size += 1 + pb::CodedOutputStream.ComputeStringSize(ModelFamilyName);
    }
    if (MaxRange != 0) {
      size += 1 + pb::CodedOutputStream.ComputeInt32Size(MaxRange);
    }
    if (SpinSpeed != 0) {
      size += 1 + pb::CodedOutputStream.ComputeInt32Size(SpinSpeed);
    }
    if (Frequency != 0) {
      size += 1 + pb::CodedOutputStream.ComputeInt32Size(Frequency);
    }
    if (_unknownFields != null) {
      size += _unknownFields.CalculateSize();
    }
    return size;
  }

  [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
  [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
  public void MergeFrom(modelInsertMsg other) {
    if (other == null) {
      return;
    }
    if (other.ModelName.Length != 0) {
      ModelName = other.ModelName;
    }
    if (other.ModelFamilyName.Length != 0) {
      ModelFamilyName = other.ModelFamilyName;
    }
    if (other.MaxRange != 0) {
      MaxRange = other.MaxRange;
    }
    if (other.SpinSpeed != 0) {
      SpinSpeed = other.SpinSpeed;
    }
    if (other.Frequency != 0) {
      Frequency = other.Frequency;
    }
    _unknownFields = pb::UnknownFieldSet.MergeFrom(_unknownFields, other._unknownFields);
  }

  [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
  [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
  public void MergeFrom(pb::CodedInputStream input) {
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    input.ReadRawMessage(this);
  #else
    uint tag;
    while ((tag = input.ReadTag()) != 0) {
      switch(tag) {
        default:
          _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
          break;
        case 10: {
          ModelName = input.ReadString();
          break;
        }
        case 18: {
          ModelFamilyName = input.ReadString();
          break;
        }
        case 24: {
          MaxRange = input.ReadInt32();
          break;
        }
        case 32: {
          SpinSpeed = input.ReadInt32();
          break;
        }
        case 40: {
          Frequency = input.ReadInt32();
          break;
        }
      }
    }
  #endif
  }

  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
  [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
  [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
  void pb::IBufferMessage.InternalMergeFrom(ref pb::ParseContext input) {
    uint tag;
    while ((tag = input.ReadTag()) != 0) {
      switch(tag) {
        default:
          _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, ref input);
          break;
        case 10: {
          ModelName = input.ReadString();
          break;
        }
        case 18: {
          ModelFamilyName = input.ReadString();
          break;
        }
        case 24: {
          MaxRange = input.ReadInt32();
          break;
        }
        case 32: {
          SpinSpeed = input.ReadInt32();
          break;
        }
        case 40: {
          Frequency = input.ReadInt32();
          break;
        }
      }
    }
  }
  #endif

}

#endregion


#endregion Designer generated code
